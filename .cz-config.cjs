'use strict';

module.exports = {
  types: [
    { value: 'feat', name: '1. feat:     新功能' },
    { value: 'fix', name: '2. fix:      修复' },
    { value: 'docs', name: '3. docs:     文档变更' },
    { value: 'style', name: '4. style:    代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: '5. refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: 'perf', name: '6. perf:     性能优化' },
    { value: 'test', name: '7. test:     增加测试' },
    { value: 'chore', name: '8. chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: '9. revert:   回退' }
  ],

  messages: {
    type: '请选择提交类型(数字键快速选择):',
    scope: '请选择修改范围(数字键快速选择):',
    subject: '请用一句话简要描述提交(必填，建议100字内):',
    body: '请输入详细描述(按回车跳过):',
    footer: '请输入关联的ISSUE ID(如#123，按回车跳过):',
    confirmCommit: '确认提交？(y/n)'
  },

  // 范围配置（添加数字前缀和描述）
  scopes: [
    // 按功能分类分组
    {
      name: '1. core:       核心功能',
      value: 'core',
      description: '核心业务逻辑修改'
    },
    {
      name: '2. components: 组件开发',
      value: 'components',
      description: '公共组件修改'
    },
    {
      name: '3. styles:     样式主题',
      value: 'styles',
      description: 'CSS/主题变量修改'
    },

    // 开发工具类
    {
      name: '4. build:      构建工具',
      value: 'build',
      description: 'webpack/vite配置修改'
    },
    {
      name: '5. scripts:    脚本命令',
      value: 'scripts',
      description: 'package.json脚本修改'
    },

    // 文档类
    {
      name: '6. docs:       文档',
      value: 'docs',
      description: '文档内容更新'
    },
    {
      name: '7. examples:   示例',
      value: 'examples',
      description: '示例项目修改'
    },

    // 特殊选项
    {
      name: '8. other:      其他修改',
      value: 'other',
      description: '未分类的修改'
    },
    {
      name: '9. empty:      不指定范围',
      value: '',
      description: '不指定范围名称'
    }
  ],

  // 交互配置
  allowBreakingChanges: [], // 禁用BREAKING CHANGE
  skipQuestions: ['body', 'footer'], // 默认跳过详细描述和footer

  // 主题长度限制
  subjectLimit: 100,

  // 自定义交互流程
  prompter: (cz, commit) => {
    cz.prompt([
      // type选择
      {
        type: 'list',
        name: 'type',
        message: this.messages.type,
        choices: this.types,
        pageSize: 20
      },
      // scope选择
      {
        type: 'input',
        name: 'scope',
        message: this.messages.scope,
        choices: this.scopes
      },
      // subject输入
      {
        type: 'input',
        name: 'subject',
        message: this.messages.subject,
        validate: (input) => {
          if (!input.trim()) return '提交描述不能为空';
          if (input.length > this.subjectLimit) {
            return `描述建议不超过${this.subjectLimit}字(当前:${input.length})`;
          }
          return true;
        },
        filter: (input) => input.replace(/(^\s*)|(\s*$)/g, '')
      }
    ]).then((answers) => {
      const scope = answers.scope;
      const commitMsg = `${answers.type}${scope ? '(' + scope + ')' : ''}: ${answers.subject}`;

      commit(commitMsg);
    });
  }
};
