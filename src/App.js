import React from "react";
import { useState } from "react";
import FriendList from "./FriendList";
import AddFriendForm from "./Addfriend";
import SplitBilll from "./split-bill";

function App() {
  const [friends, SetFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [currentFriend, setcurrentFriend] = useState("");

  function handleShowAddFriendForm(e) {
    setShowAddFriendForm(!showAddFriendForm);
  }

  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-sm-9 offset-sm-2" style={{ margin: "150px" }}>
            <div className="row">
              {/* FIrst column  */}
              <div className="col-sm-6">
                <FriendList
                  friends={friends}
                  setcurrentFriend={setcurrentFriend}
                />
                <AddFriendForm
                  showAddFriendForm={showAddFriendForm}
                  setShowAddFriendForm={setShowAddFriendForm}
                  friends={friends}
                  SetFriends={SetFriends}
                />

                {/* Button to showl and close addfriend form */}
                <div className="row add-friend-button mt-3 ">
                  <div className="col-sm-4 p-0 add-friend-button">
                    <button onClick={(e) => handleShowAddFriendForm(e)}>
                      {showAddFriendForm ? "Close" : "Add Friend"}
                    </button>
                  </div>
                </div>
              </div>

              {/* second column */}
              <div className="col-sm-5 split-bill">
                <SplitBilll
                  currentFriend={currentFriend}
                  friends={friends}
                  SetFriends={SetFriends}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
