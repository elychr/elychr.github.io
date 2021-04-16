import { useEffect, useState } from "react";

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
}

export const FlexGrid = ({ renderItem, data, cols = 3, noResize }) => {
    let [numCols, setNumCols] = useState()

    const handleResize = () => {        

        let col = window?.innerWidth < 500 ? 1 :
            noResize ? cols :
                Math.ceil((window.innerWidth / window.devicePixelRatio) / (cols) / 250)

                console.log(noResize, window.innerWidth, col, numCols)

        setNumCols(col === 0 ? 1 : col < 0 ? col * -1 : col)
    }

    if (!numCols && typeof window !== 'undefined') { handleResize() }

    const debouncedHandleResize = debounce(() => handleResize(), 1000)

    useEffect(() => {
        window.addEventListener('resize', debouncedHandleResize)
        return _ => window.removeEventListener('resize', debouncedHandleResize)
        // eslint-disable-next-line 
    }, [])


    const Row = ({ data }) => {
        var z = data?.length
        if (z < numCols) {
            do {
                data?.push(null)
                z += 1
            } while (z < numCols)
        }
        return <div className='flex flex-1 flex-row flex-wrap justify-center self-center'>{data?.map(e => e && renderItem(e))}</div>
    }

    if (Array.isArray(data) && data?.length > 0) {
        var rtn = []
        var x = 0
        do {
            rtn.push(<Row key={`row_${x}`} data={data?.slice(x, numCols + x)} />)
            x += numCols
        } while (x < data?.length)
        return rtn
    }
    return <Row>{renderItem(data)}</Row>
}