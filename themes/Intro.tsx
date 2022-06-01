import Divider from './Divider';

import type { ThemeOptions } from './type';

const Intro = ({ selfIntroduction }: { selfIntroduction: ThemeOptions['selfIntroduction'] }) => {
  return (
    <>
      <Divider title='自我介绍' />
      <span style={{ lineHeight: 1.5 }}>{selfIntroduction}</span>
    </>
  )
}

export default Intro;
