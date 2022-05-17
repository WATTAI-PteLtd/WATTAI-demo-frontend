import logo from './101web3.png';
import './App.css';
import { Upload, message, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

interface BAYC {
  ID: string,
  BACKGROUND: string,
  CLOTHES: string,
  EARRING: string,
  EYES: string,
  FUR: string,
  HAT: string,
  MOUTH: string,
}


function App() {
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);
  const [bayc, setBayc] = useState<BAYC>({} as BAYC);

  const props = {
    maxCount: 1,
    name: 'file',
    action: 'http://101web3.com:5000/api/image',
    headers: {
      authorization: 'authorization-text',
    },
    showUploadList: false,
    onChange(info: any) {
      // if (info.file.status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      if (info.file.status === 'done') {
        setShow(true);
        setBayc(info.file.response);
        setUrl("http://101web3.com/#" + info.file.response.ID + '.PNG');
        // message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        // message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(file: any) {
      setShow(false);
      setBayc({} as BAYC);
    }
  };

  return (
    <div className="App o3j99 LLD4me yr19Zb LS8OJ">
      {/* <header className="App-header">

      </header> */}
      <img src={logo} className="lnXdpd" alt="logo" height="80" width="407" />
      <p className='Paragrah'>
        Search by <code>BAYC</code> image
      </p>
      <Upload {...props}>
        <Button icon={<CameraOutlined />}>Choose File</Button>
      </Upload>
      {show ? <div className='picContainer'>
        <div className='figureCaption'>
          <img src={process.env.PUBLIC_URL + `/static/${bayc.ID}.PNG`} className="BAYC" alt='image' /> <br></br>
          BAYC #{bayc.ID}<br></br>
          <b>BACKGROUND: </b> {bayc.BACKGROUND} <br></br>
          <b>CLOTHES: </b> {bayc.CLOTHES} <br></br>
          <b>EARRING: </b>{bayc.EARRING} <br></br>
          <b>EYES: </b>{bayc.EYES}<br></br>
          <b>FUR: </b>{bayc.FUR}<br></br>
          <b>HAT: </b>{bayc.HAT} <br></br>
          <b>MOUTH: </b>{bayc.MOUTH} <br></br>
        </div>
      </div> : null}
    </div>
  );
}

export default App;
