import {SignUp} from "./components"

/**
 * 👋🏻 Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () =>
    <div className="h-screen flex flex-col justify-center overflow-hidden p-3 bg-gray-200">
        <SignUp/>
    </div>


export default Root
