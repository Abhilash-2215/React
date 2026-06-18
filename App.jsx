function app()
{
  const name='birds';
  let num1=32;
  let num2=12;
  let num=num1+num2;
  let age =18;
  let userage=20;
  const warn = () => {
    alert("Warning⚠️");  
  };
  return (
    <div>
      {
        (userage>age)? <p>user logged in </p>:
        <p>invalid user</p>
      }
    <h1 style={{color:"yellow"}}>Page for {name}</h1>
    <img style={{width:200}}
    src="https://i.pinimg.com/webp87/736x/13/37/c7/1337c7fc1780f7de5905f5e341b88dbc.webp"
    alt="Birds"/>
    <p className="Avian">kishore  is a god booy roll num is <b>{num} ordersS</b></p>
    <button onDoubleClick={warn} style={{width:"fit-content"}}>Danger</button>
    </div>
  );
}
export default app;