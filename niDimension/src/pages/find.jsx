import {Card, List} from "antd";


const Find = (props) => {
	return (
		<>
			<List
				grid={{
					gutter: 16,
					xs: 1,
					sm: 2,
					md: 4,
					lg: 4,
					xl: 6,
					xxl: 3,
				}}
				dataSource={props.pictures}
				renderItem={(item) => (
					<List.Item>
						<Card
							hoverable
							title={item.name}
							cover={<img alt="example" src={item.url}/>}
							style={{width: '80%'}}
						>
							{item.description} {item.likes}
						</Card>
					</List.Item>
				)}
			/>
		</>
	)
}



export default Find