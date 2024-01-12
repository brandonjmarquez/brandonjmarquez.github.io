import IconSelector from "./IconSelector";

const Icon = (props) => {
  return ( 
    <div className={`${props.item.name}-icon mx-3 inline-block`}>
      <IconSelector iconName={props.item.name} />
    </div>
  )
}

export default Icon;