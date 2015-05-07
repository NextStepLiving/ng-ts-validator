module.exports = {
    src: {
        ts: 'app/**/*.ts',
        html: [
            'app/**/*.html',
            '!app/jspm_packages/**/*.html',
            '!app/index.html'
        ],
        scss: 'app/scss/main.scss'
    }
};
