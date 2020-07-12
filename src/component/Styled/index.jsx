import React, { Component } from 'react';
import styled,{keyframes} from 'styled-components'
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Wrap = styled.div`
  font-size:30px;
  color:blue;
  widt:100%;
    &{
        animation: ${rotate} 2s linear infinite;

    }
  ::before{
      content:'!!!'
  }
  h1{
      color:green;
      font-size:12px;
  }
  .mains{
      width:100px;
      height:100px;
      background-color:gray;
      border:2px solid #000;
      border-raduis:4px;
  }
`;
const Thing = styled.div`
/*&符号表示引用主组件，注意体会加上&符号与不加的区别：*/


    /* 应用于className为blue的Thing组件 */
    &.blue{
    color: blue;
    }

    /* 应用于className为red的Thing组件里的所有子组件或者html标签 */
    .red {
    color: red;
    }


    /* 应用于紧邻Thing组件的下一个Thing组件 */
    & + & {
    color: green;
    }
`;


const TomatoButton = styled(Wrap)`
  color:red;
`
const ReversedButton = props => {
    console.log(props)
    return <button {...props} children={props.children.split('').reverse()} />
}


// 下面是给 react-router-dom  Link 组件添加样式的示例
const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;
class Styleds extends Component {
    render() {
        return <div>
            <Wrap primary='red'>
                <h1>你好 我是绿色</h1>
                <div className='mains'></div>
            </Wrap>
            <TomatoButton >样式继承</TomatoButton>
            <TomatoButton as={ReversedButton}>my name is msw</TomatoButton>
            <Thing className="blue" as='a' href='https://www.baidu.com'>
                <p className=''>Thing组件</p>
            </Thing>
            <Thing>
            <p className="red" >p标签</p>
            </Thing>
            <Thing>
            <p >p标签</p>
            </Thing>
        <br/><br/>
            <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
        </div>
    }
}

export default Styleds