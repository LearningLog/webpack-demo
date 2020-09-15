const path = require('path')

module.exports = {
    entry: './src/main.js', // 指定打包的入口
    output: { // 指定打包的出口
        path: path.join(__dirname, './dist/'), // 指定打包的结果文件存放的目录路径（注：必须是绝对路径）
        filename: 'bundle.js' // 指定打包的结果文件名
    }
}