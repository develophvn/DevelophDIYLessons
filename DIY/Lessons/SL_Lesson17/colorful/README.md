## Setup
Để tránh mất thời gian set up, mình đã setup sẵn 1 project. Clone project về là xài được luôn.
```
git clone https://github.com/sangle-developh/DevelophDIYLessons/ 
cd DevelophDIYLessons
git checkout patch-2 #Đây là tên branch
cd DIY/Lessons/SL_Lesson17/colorful
npm install
npm start
```

## Tổng quát
Trong project, mình đã tạo sẵn 1 component Square với dimension 46px*46px và 2px margin. Component này có thể nhận vào 1 props color để thay đổi màu của hình vuông. Component này được viết dưới dạng styled component - nơi mà html, css, js đều ở trong cùng 1 component. 

```
const  Square = ({ color, onClick, index }) => {

	const  SquareComponent = styled.div`
		min-height: 46px;
		min-width: 46px;
		max-height: 46px;
		max-width: 46px;
		background-color: ${color};
		margin: 2px;
	`;

	return (
		<SquareComponent  onClick={() =>  onClick(index)}  />
	)
}
```

Tương tự, trong class App, chúng ta tạo 1 component SquareGroup để tạo ra giới hạn cho hình vuông. Có thể pass 1 props tên là numerOfSquares để xác định cần bao nhiêu diện tích để chứ các hình vuông.
```
const  SquareGroup = styled.div`
	width: ${props  =>  Math.sqrt(props.numerOfSquares) * 50}px;
	height: ${props  =>  Math.sqrt(props.numerOfSquares) * 50}px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
`
```

Trong class App,  chúng ta gọi SquareGroup và tạo 1 hình vuông, vậy là xong setup
```
function  App() {
	return (
		<div  className="App">
			<div  className="Frame">
				<SquareGroup  numerOfSquares={100}>
					<Square color={COLORS[value]}/>
				</SquareGroup>
			</div>
		</div>
	);
}
```

## Testing
Khi source code còn nhỏ, chúng ta còn có khả năng kiểm soát từng component thủ công, nhưng khi source code trở nên cồng kềnh hơn, khả năng test từng function 1 là không thể.
Tìm hiểu thêm tại: https://jestjs.io/docs/
Ví dụ ở trên, chúng ta xài component của Square. Giả sử 1 ngày nào đó, 1 ai đó vào sửa Square và không check kĩ thì sẽ tạo ra bug trên prod. Vì vậy việc viết test cho component là cực kì quan trọng. 

## Map
Chúng ta muốn tạo 100 hình vuông, nên không thể nào viết bằng tay được, vì vậy chúng ta sẽ xài map.

QQ: Tạo ra 100 hình vuông theo hình vuông

## onClick
QQ: Chúng ta tạo ra 100 hình vuông, làm sao để chuyển màu cho từng hình vuông?

## useMemo và useCallback
Mở chrome console lên, với mỗi lần update 1 hình vuông, các hình vuông còn lại có renđer lại hay không? Làm sao để tránh được điều này?

## Playtime
Sử dụng function dưới đây để react render lại mỗi X mili giây:
```
var  cursor = 0;
setInterval(function () {
	// Do something here
	cursor++;
}, X);
```
