import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const FileSearch = ({ title, onFileSearch }) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState('')
    let nods = useRef(null)
    const closeSearch = (e) => {
        e.preventDefault()
        setInputActive(false)
        setValue('')
    }
    useEffect(() => {
        const handleInputEvent = (event) => {
            const { keyCode } = event
            if (keyCode === 13 && inputActive) {
                onFileSearch(value)
            } else if (keyCode === 27 && inputActive) {
                closeSearch(event)
            }
        }
        document.addEventListener('keyup', handleInputEvent)
        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })
    // 这里用 useEffect 会报错 nods 不存在
    useLayoutEffect(() => {
        if (inputActive) {
            nods.current.focus()
        }
    }, [inputActive])
    return (
        <div className="alert alert-primary">
            {!inputActive &&
                <div className="d-flex justify-content-between align-items-center">
                    <span>{title}</span>
                    <button type="button" className="btn btn-primary" onClick={() => { setInputActive(true) }}>
                    <FontAwesomeIcon icon={faSearch} title="搜索"/>
                    </button>
                </div>
            }
            { inputActive &&
                <div className="row">
                    <div className="col-8">
                        <input className="form-control" ref={nods} value={value} onChange={(e) => { setValue(e.target.value) }} />
                    </div>
                    <button type="button" className="btn btn-primary col-4" onClick={() => { setInputActive(false) }}>关闭</button>
                </div>
            }
        </div>
    )
}
export default FileSearch