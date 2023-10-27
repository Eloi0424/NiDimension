// 1. 引入依赖
const multer = require('multer')
const path = require('path')

// 2. 封装处理路径函数
const handlePath = (dir) => {
	return path.join(__dirname, './', dir)
}

// 3. 设置 multer 的配置对象
const storage = multer.diskStorage({
	// 3.1 存储路径
	destination: function(req, file, cb) {
		cb(null, handlePath('../public/pictures'))
	},
	//  3.2 存储名称
	filename: function (req, file, cb) {
		// 将图片名称分割伪数组，用于截取图片的后缀
		const fileFormat = file.originalname.split('.')
		// 自定义图片名称
		cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
	}
})

// 4. 为 multer 添加配置
const multerConfig = multer({
	storage: storage
})

module.exports = multerConfig