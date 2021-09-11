
# React

  

## React vs Building House

  

| Xây Web | Xây nhà |

| ---------- | ------------------------------------ |

| HTML | Vật liệu xây nhà |

| CSS | Sơn |

| JavaScript | Công Nhân |

| State | Trạng thái hiện tại |

| Props | Yêu cầu từ bên ngoài |

| Hook | Các quy trình đã được quy định trước |

| Hook | Các quy trình đã được quy định trước |

  

## React Tree

  

![ReactTree](https://www.edureka.co/blog/wp-content/uploads/2017/08/UI-Tree.png)

  

## Debug tools

  

- Elements

- Console

- React Developer Tools

  

## Array of Object

  

```

const [array, setArray] = useState([1, 2, 3]);

render () {

{array.map(e => <Something id={e} element={e}/>)}

}

```

  

## Passing function

  

```

function doSomething(e){

// do something here

return something

}

render () {

<button onClick=((e)=>doSomething(e))>Something</button>

}

```

  

```

const doSomething = (e) => {

// do something here

return something

}

render () {

<button onClick=(doSomething)>Something</button>

}

```

  

```

render () {

<button onClick=(()=>//do something here)>Something</button>

}

```

  

## Passing Children

  

```

render () {

<Parent>

<Children/>

</Parent>

}

```

  

## Conditional Rendering

  

- Dùng 1 function giúp đỡ:

  

```

conditionalRender() {

if (condition) return <TrueSomething/>

return <FalseSomething/>

}

render () {

{condionalRender()}

}

```

  

- Viết trong render

  

```

render () {

{condition ? <TrueSomething/> : <FalseSomething/>}

{condition && <TrueSomething/>}

}

```

# Hook

  

## useEffect

```

useEffect(() => {

	const interval = setInterval(() => {

		// run something

	}, 1000);

	return () => clearInterval(interval);

}, []);

```

## useMemo
```
React.memo(Component);
```
## useCallback

- Naive approach

```

<Square key={index} onClick={(e) => handleClick(e)} />

```

 - Callback

```

const handleClick = useCallback((index) => {

	let temp = [...array];

	temp[index] = (array[index] + 1) % COLORS.length;

	setArray(temp)

	console.log(temp)

}, [])
....
<Square key={index} onClick={handleClick} />
```
  ## Router

## useContext

