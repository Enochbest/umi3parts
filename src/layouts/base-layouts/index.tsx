import Nav from '@/components/Nav';
// @ts-ignore
const baseLayouts = (props)=>{
  return (
    <div>
        <Nav></Nav>
      <div>
        {props.children}
      </div>
    </div>
  )
}
export default baseLayouts
