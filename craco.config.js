import { getRequiredModules } from "@syncfusion/ej2/spreadsheet";

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
};