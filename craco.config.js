module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        exclude: /index\.css$/,
                    },
                ],
            },
        },
    },
};
