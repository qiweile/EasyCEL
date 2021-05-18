import './App.less';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import DefaultFiles from './components/defaultFiles'
function App() {
    return (
        <div className="App container-fluid">
            <div className="row">
                <div className="col-3 bg-danger left-panel">
                    <FileSearch title="我的云文档" onFileSearch={(value)=>{ console.log(value)}}/>
                    <FileList files={DefaultFiles} />
                </div>
                <div className="col-9 bg-primary right-panel">
                    <h1>this is the right</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
