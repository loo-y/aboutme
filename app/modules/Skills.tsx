import skills from '../api/mockinfo/skills'
import { map as _map } from 'lodash'

const Skills = () => {
    const { data } = skills || {}
}

export default Skills

// ********** helper **********
function randomChunk<T>(array: T[], chunkSize?: number[]): T[][] {
    let result: T[][] = []
    let index = 0,
        randomIndex,
        size
    chunkSize = chunkSize || [1, 2, 3]
    while (index < array.length) {
        randomIndex = Math.floor(Math.random() * chunkSize.length)
        size = chunkSize[randomIndex]
        result.push(array.slice(index, index + size))
        index += size
    }
    return result
}
