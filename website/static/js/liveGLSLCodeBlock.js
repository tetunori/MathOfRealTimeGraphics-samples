import React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import { usePrismTheme } from '@docusaurus/theme-common';
import GLSLCanvasBox from './glslcanvas-box';
import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';

function liveGLSLCodeBlock(props) {
  const { fragName, fragCode } = props;
  const [code, setCode] = React.useState(fragCode);
  const prismTheme = usePrismTheme();
  const isBrowser = useIsBrowser();

  return (
    <>
      <GLSLCanvasBox fragCode={code} />
      <div className={styles.liveEditorContainer}>
        <div className={styles.liveEditorHeader}> {fragName} </div>
        <LiveProvider code={code} language="glsl" theme={prismTheme}>
          <LiveEditor key={isBrowser} onChange={setCode} className={styles.liveEditor} />
        </LiveProvider>
      </div>
    </>
  );
}

export default liveGLSLCodeBlock;
