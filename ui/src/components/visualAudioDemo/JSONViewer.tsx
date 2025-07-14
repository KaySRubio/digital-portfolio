import JsonView from '@uiw/react-json-view';
import { useDemoContext } from '../../context/DemoContext';

type JSONViewerProps = {
  collapseLevel?: number;
};

export default function JSONViewer({ collapseLevel = 3 }: JSONViewerProps) {
  const { resultFromBackend } = useDemoContext();
  const json = resultFromBackend ? resultFromBackend : [];

  return (
    <JsonView collapsed={collapseLevel} value={json} shortenTextAfterLength={200} />
  );
};

