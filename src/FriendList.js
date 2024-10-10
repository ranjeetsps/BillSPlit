function FriendList({ friends, setcurrentFriend }) {
  return (
    <div className="row">
      {friends.map((friend) => (
        <div className="row p-1 selected m-2" key={friend.id}>
          <div className="col-sm-3">
            <img className="friend-img" src={friend.image} alt={friend.name} />
          </div>
          <div className="col-sm-6">
            <strong>{friend.name}</strong>
            <p style={{ fontSize: "0.85em", color: "#6c757d" }}>
              {friend.balance > 0 ? (
                <>
                  {friend.name} owes you {friend.balance}$
                </>
              ) : friend.balance === 0 ? (
                <>You are even with {friend.name}</>
              ) : (
                <>
                  You owe {friend.name} {-friend.balance}$
                </>
              )}
            </p>
          </div>
          <div className="col-sm-2 pl-0">
            <button
              className="choose-friend"
              onClick={() => setcurrentFriend(friend)}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
