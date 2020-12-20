function Chip(p) {
  return (
    <span 
      data-testid="status"
      className={'if color ' + p.state.color} 
      style={{padding: '4px 12px', border: (p.state.border ? '2px solid #e8e0d9' : 'none')}}
    >
      <span style={{color: (p.state.border ? '' : '#faf9f7')}}>{p.state.name}</span>
    </span>
  )
}
export default Chip