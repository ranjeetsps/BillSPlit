import { useState } from "react";
function AddFriendForm({
  showAddFriendForm,
  setShowAddFriendForm,
  friends,
  SetFriends,
}) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendUrl, setNewFriendUrl] = useState("");

  function generateRandomId() {
    return `id-${Math.floor(Math.random() * 1000000)}-${Date.now()}`;
  }

  function handleAddFriend(e) {
    e.preventDefault();
    const newFriendObj = {
      name: newFriendName,
      image: newFriendUrl,
      id: generateRandomId,
    };
    console.log("addin a new firnd", newFriendObj);
    SetFriends([...friends, newFriendObj]);
    setShowAddFriendForm(!showAddFriendForm);
  }

  return (
    <>
      {showAddFriendForm && (
        <div className="row form">
          <div className="col-sm-12">
            <form>
              <div className="row mt-4">
                <div className="col-sm-6 mb-4">
                  <label htmlFor="friendName">Friend Name</label>
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="friendName"
                    className="form-control"
                    onChange={(e) => setNewFriendName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="imageUrl">Image</label>
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="imageUrl"
                    className="form-control"
                    onChange={(e) => setNewFriendUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-12">
                  <button className="choose-friend" onClick={handleAddFriend}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddFriendForm;
