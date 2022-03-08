import {ErrorMessage, useField} from "formik"
import PropTypes from "prop-types"

/**
 * 👋🏻 TextField Component
 * @param label
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const TextField = ({label, ...props}) => {
    /** ✨ Hooks */
    const [field, meta] = useField(props)

    /** ✨ Render */
    return <div className="mb-3 flex flex-col gap-2 w-full">
        <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold">{label}</label>
        <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${meta.touched && meta.error && "text-red-500 border-red-500"}`}
            {...field}
            {...props}
            id={field.name}
            autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="text-red-500 text-xs italic"/>
    </div>
}

/** ✨ Check props */
TextField.propTypes = {
    label: PropTypes.string,
    props: PropTypes.object
}

export default TextField
