import { useEffect, useState } from 'react'
import sortBy from 'lodash/sortBy'
import { roundPathCorners } from 'utilities'

type Dimensions = {
  top: number
  left: number
  width: number
  height: number
  position: number
  id: string
}

/* used to draw `a path from SeriesCards in CoursePaths */
const useCoursePath = (dimensions: Dimensions[] = []) => {
  const [path, setPath] = useState('')

  useEffect(() => {
    const points = Object.entries(dimensions).map(([key, val]) => {
      val.id = key
      return val
    })
    const sortedPoints = sortBy(points, point => point.position)
    let tempPath = ''
    sortedPoints.forEach((point, index) => {
      const xCenter = Math.floor(point.left + point.width / 2)
      const yCenter = Math.floor(point.top + point.height / 2)
      const xCenterMid = sortedPoints[index + 1]
        ? Math.floor(sortedPoints[index + 1].left + point.width / 2)
        : ''
      const yCenterMid = sortedPoints[index + 1]
        ? `L${xCenterMid} ${yCenter}`
        : ''
      if (index > 0) {
        tempPath = `${tempPath} L${xCenter} ${yCenter} ${yCenterMid}`
      } else {
        tempPath = `M ${xCenter} ${yCenter} ${yCenterMid}`
      }
    })
    setPath(roundPathCorners(tempPath, 15, false))
    return () => {}
  }, [dimensions, path])
  return {
    path,
  }
}

export default useCoursePath
