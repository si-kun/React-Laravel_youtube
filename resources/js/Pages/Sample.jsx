import React, { useEffect } from 'react'

const Sample = () => {

    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("COmponent unmounted")
        }
    },[])

  return (
    <div>これはサンプルページです🔥</div>
  )
}

export default Sample