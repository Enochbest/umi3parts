import {Redirect} from 'umi'
export default (props:any)=>{
  // @ts-ignore
  if (true){
    return <div>{props.children}</div>
  }else {
    return <Redirect to="/login"/>
  }
}
