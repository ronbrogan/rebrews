angular.module("Rebrews").filter("descenderFilter", descenderFilter);

function descenderFilter() {
    return function (inputValue, property) {
        if (!property)
            return inputValue;
        return inputValue[property];
    }
}