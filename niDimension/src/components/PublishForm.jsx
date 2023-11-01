import React, {useState} from 'react';
import {PlusOutlined, UploadOutlined} from '@ant-design/icons';
import {Button, Form, Input, message, Upload} from 'antd';
import axios from "axios";

const PublishForm = () => {
	const [fileList, setFileList] = useState([])
	const [uploading, setUploading] = useState(false);
	const [name, setName] = useState('')
	
	const [form] = Form.useForm();
	const formItemLayout ={
				labelCol: {
					span: 4,
				},
				wrapperCol: {
					span: 14,
				},
			}
	const buttonItemLayout = {
		wrapperCol: {
			span: 14,
			offset: 4,
		}
	}
	const handleUpload = () => {
		console.log(fileList[0])
		console.log(name)
		const formData = new FormData()
		formData.append('picture', fileList[0])
		formData.append('name', name)
		axios.post('api/pictures/upload', formData).then(res => {
			console.log(res)
			console.log('upload success')
			setFileList([])
			setName('')
		})
	};
	const props = {
		onRemove: (file) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);
			setFileList(newFileList);
		},
		beforeUpload: (file) => {
			setFileList([...fileList, file]);
			return false;
		},
		fileList,
		listType: "picture-card",
	};
	return (
		<>
			<div style={{height:20}}></div>
			<div style={{marginLeft:60}}>
				<h1>发布图片</h1>
			</div>
			<Form
				{...formItemLayout}
				layout='horizontal'
				form={form}
				initialValues={{
					layout: 'horizontal',
				}}
			>
				<div style={{height:30}}></div>
				<Form.Item label="picture" >
					<Upload {...props}  >
						<div>
							<PlusOutlined/>
							<div style={{marginTop: 8}}>Upload</div>
						</div>
					</Upload>
				</Form.Item>
				<Form.Item label="nameInput" >
					<Input type="text" value={name} placeholder="输入图片标题" onChange={(e) => setName(e.target.value)}/>
				</Form.Item>
				<Form.Item label="submit" >
					<Button
						type="primary"
						onClick={handleUpload}
						disabled={fileList.length === 0}
						loading={uploading}
						style={{
							marginTop: 16,
						}}
					>
						{uploading ? 'Uploading' : 'Start Upload'}
					</Button>
				</Form.Item>
				
			</Form>
		</>
	);
};
export default PublishForm;