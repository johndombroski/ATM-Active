const ATMDeposit = ({ onChange, isDeposit, inputAmount }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange} value={inputAmount}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const { Button } = ReactBootstrap;
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [inputAmount, setInputAmount] = React.useState(0);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
    setInputAmount(deposit);

  };
  const handleSubmit = () => {
    if(!isDeposit && inputAmount>totalState){
      alert('Not enough money to perform task');
      setTotalState(totalState);
      event.preventDefault();
    }else{
      let newTotal = isDeposit ? totalState + inputAmount : totalState - inputAmount;
      setTotalState(newTotal);
      event.preventDefault();
    }

    setInputAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <Button onClick={() => setIsDeposit(true)}>Deposit</Button>
      <Button onClick={() => setIsDeposit(false)}>Cash Back</Button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit} inputAmount={inputAmount}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
