import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'
const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
    const [editStatus, setEditStatus] = useState(false)
    const [value, setValue] = useState('')
    return (
        <ul className="list-group list-group-flush file-list">
            {
                files.map(file => (
                    <li className="list-group-item bg-light d-flex align-items-center" key={file.id}>
                        <span className="col-2">
                            <FontAwesomeIcon size="lg" icon={faMarkdown} />
                        </span>
                        <span className="col-6 c-link" onClick={() => { onFileClick(file.id) }}>
                            {file.title}
                        </span>
                        <button type="button" className="icon-button col-2" onClick={() => { setEditStatus(file.id); setValue(file.title) }}>
                            <FontAwesomeIcon title="编辑" size="lg" icon={faEdit} />
                        </button>
                        <button type="button" className="icon-button col-2" onClick={() => { onFileDelete(file.id) }}>
                            <FontAwesomeIcon title="删除" size="lg" icon={faTrash} />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}
FileList.propTypes = {
    files: PropTypes.array,
    onFileClick: PropTypes.func,
    onFileDelete: PropTypes.func
}
export default FileList