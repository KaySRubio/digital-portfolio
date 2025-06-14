import JsonView from '@uiw/react-json-view';
import { useDemoContext } from '../../context/DemoContext';

type JSONViewerProps = {
  collapseLevel?: number;
};

export default function JSONViewer({ collapseLevel = 3 }: JSONViewerProps) {
  const { resultFromBackend } = useDemoContext();
  const json = resultFromBackend ? resultFromBackend : [];

  return (
    <div>
      <h4 className='sr-only'>JSON</h4>
      <JsonView collapsed={collapseLevel} value={json} shortenTextAfterLength={200} />
    </div>
  );
};

