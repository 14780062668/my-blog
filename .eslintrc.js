// // https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			spread: true,
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	//你的脚本将要运行在什么环境中
	env: {
		browser: true,
		es6: true
	},
	//额外的全局变量
	globals: {
		vue: true,
		vm: true,
		window: true
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/essential',
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	// required to lint *.vue files
	//配置第三方插件
	//在使用插件前要用npm安装它
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		'keyword-spacing': [2, {
			'overrides': {
				"if": {"after": false},
				"for": {"after": false},
				"while": {"after": false}
		}}],
		'space-before-function-paren': ['error', 'never'],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 缩进
		indent: [2, 'tab'],
		//分号
		semi: [2, 'always'],
		//禁止使用没有定义的变量
		'no-undef': 2,
		'no-tabs': 'off'
	}
};