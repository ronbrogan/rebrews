using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
[assembly: PreApplicationStartMethod(typeof(RebrewsData.SettingsProcessor), "Start")]

namespace RebrewsData
{
    public static class SettingsProcessor
    {
        private const string AppSettingPrefix = "APPSETTING_";
        private const string SqlServerPrefix = "SQLCONNSTR_";
        private const string MySqlServerPrefix = "MYSQLCONNSTR_";
        private const string SqlAzureServerPrefix = "SQLAZURECONNSTR_";
        private const string CustomPrefix = "CUSTOMCONNSTR_";

        public static void Start()
        {
            foreach (DictionaryEntry entry in Environment.GetEnvironmentVariables(EnvironmentVariableTarget.Machine))
            {
                var key = (string)entry.Key;
                var value = (string)entry.Value;

                if (key.StartsWith(MySqlServerPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    key = key.Substring(MySqlServerPrefix.Length);
                    SetConnectionString(key, value, "MySql.Data.MySqlClient");
                }
                else if (key.StartsWith(SqlAzureServerPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    key = key.Substring(SqlAzureServerPrefix.Length);
                    SetConnectionString(key, value, "System.Data.SqlClient");
                }
                else if (key.StartsWith(SqlServerPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    key = key.Substring(SqlServerPrefix.Length);
                    SetConnectionString(key, value, "System.Data.SqlClient");
                }
                else if (key.StartsWith(CustomPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    key = key.Substring(CustomPrefix.Length);
                    SetConnectionString(key, value);
                }
                else if (key.StartsWith(AppSettingPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    key = key.Substring(AppSettingPrefix.Length);
                    ConfigurationManager.AppSettings[key] = value;
                }
            }
        }

        private static void SetConnectionString(string name, string connString, string providerName = null)
        {
            ConnectionStringSettings settings = ConfigurationManager.ConnectionStrings[name];
            settings?.SetData(connString, providerName);
        }

        private static void SetData(this ConnectionStringSettings settings, string connString, string providerName)
        {
            // Note: we need to use reflection to be able to modify connection strings
            // This is an unfortunate framework limitation, and we are working with
            // the ASP.NET team to relax that restriction in the next framework
            FieldInfo readOnlyField = typeof(ConfigurationElement).GetField(
                "_bReadOnly", BindingFlags.Instance | BindingFlags.NonPublic);

            readOnlyField.SetValue(settings, value: false);
            settings.ConnectionString = connString;

            // we should leave the original provider name if a new provider name is not specified
            if (providerName != null)
            {
                settings.ProviderName = providerName;
            }
        }
    }
}