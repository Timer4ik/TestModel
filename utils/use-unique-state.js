import { v4 as uuidv4 } from "uuid"

export default (inititalValue) => {
    return useState(uuidv4(), () => inititalValue)
}