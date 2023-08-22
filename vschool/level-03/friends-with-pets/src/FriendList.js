import friendInfo from "./friendInfo"
import Friend from "./Friend"

export default function FriendList() {
  const friends = friendInfo.map(info => {
    return (
      <Friend
        key={info.name}
        {...info}
      />
    )
  })

  return (
    <div className="container">
      {friends}
    </div>
  )
}