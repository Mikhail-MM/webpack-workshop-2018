module.exorts = () => ({
    module: {
        rules: [
            {
                test: /\.ts/,
                use: "ts-loader"
            }
        ]
    }
})