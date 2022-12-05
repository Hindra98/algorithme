import photo from "../icons/group.jpg";
export default function Home() {
  return (
    <div>Home School
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={photo} alt="Une imagerie" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p className="text-base text-gray-600 leading-normal">Vous avez un nouveau message!</p>
          <input type="text" className="tw-input" />
        </div>
      </div>
    </div>
  )
}
