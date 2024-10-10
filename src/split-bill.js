import { useState } from "react";

function SplitBilll({ currentFriend, friends, SetFriends }) {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [friendsExpense, setFriendsExpense] = useState(0);
  const [paidby, setPaidby] = useState("you");

  function handleFriendsExpenseDistribution(e, whatChanged) {
    if (billValue && whatChanged === "myExpense") {
      setMyExpense(e.target.value);
      setFriendsExpense(Number(billValue) - Number(e.target.value));
    } else if (billValue && whatChanged === "friendsExpense") {
      setFriendsExpense(e.target.value);
      setMyExpense(Number(billValue) - Number(e.target.value));
    }
  }

  function handleSplitSubmit() {
    if (paidby === "you") {
      SetFriends(
        friends.map((friend) => {
          if (friend.id === currentFriend.id) {
            return {
              ...friend, // Spread the current properties of the friend
              balance: Number(friend.balance) + Number(friendsExpense),
            };
          }
          return friend; // Return unchanged friend for others
        })
      );
    } else {
      SetFriends(
        friends.map((friend) => {
          if (friend.id === currentFriend.id) {
            return {
              ...friend, // Spread the current properties of the friend
              balance: Number(friend.balance) - Number(myExpense),
            };
          }
          return friend; // Return unchanged friend for others
        })
      );
    }
    setBillValue(0);
    setMyExpense(0);
    setFriendsExpense(0);
    setPaidby("you");
  }

  return (
    currentFriend && (
      <>
        <div className="row">
          <div className="col-sm-12 centre">
            <h2>Split a Bill with {currentFriend["name"]} </h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-5 verticle-centre">
            <label>💰Bill Value</label>
          </div>
          <div className="col-sm-7">
            <input
              className="form-control"
              type="text"
              onChange={(e) => {
                setBillValue(e.target.value);
                setMyExpense(0);
                setFriendsExpense(0);
              }}
              value={billValue}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-5 verticle-centre">
            <label>💰Your Expense</label>
          </div>
          <div className="col-sm-7">
            <input
              className="form-control"
              type="text"
              onChange={(e) => handleFriendsExpenseDistribution(e, "myExpense")}
              value={myExpense}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-5 verticle-centre">
            <label>💰Friend's {}Expense</label>
          </div>
          <div className="col-sm-7">
            <input
              className="form-control"
              type="text"
              onChange={(e) =>
                handleFriendsExpenseDistribution(e, "friendsExpense")
              }
              value={friendsExpense}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-5 verticle-centre">
            <label>🤑Who is paying?</label>
          </div>
          <div className="col-sm-7">
            <select
              className="form-control"
              onChange={(e) => setPaidby(e.target.value)}
            >
              <option value="you">You</option>
              <option value="friend">Friend</option>
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-12 centre add-friend-button">
            <button onClick={handleSplitSubmit}>Submit</button>
          </div>
        </div>
      </>
    )
  );
}

export default SplitBilll;
