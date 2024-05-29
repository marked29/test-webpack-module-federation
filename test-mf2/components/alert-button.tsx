import { useEffect, useState } from 'react';
import { Avatar, Button, CardWithHover, CardContent, CardDescription, CardHeader, CardTitle } from '@shibaone/shibhubui';

const AlertButton = () => {
  let onClickHandler = () => alert('I am Common Component!');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 5) {
      setCounter(0);
    }

    let interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter, setCounter]);
  return (
    <CardWithHover className="w-[300px]">
      <CardHeader>
        <CardTitle>ultra numb button {counter}</CardTitle>
        <Avatar avatarSrc="https://ca.slack-edge.com/T03GBEUHM-U05SQPMCEP3-ff18c91957ab-512" />
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos enim accusamus sunt quos ratione aut commodi exercitationem culpa explicabo
          tempore delectus et vero consequuntur totam tempora porro, corporis labore.
        </CardDescription>
        <Button variant="default" onClick={onClickHandler}>
          Zuz
        </Button>
        <button onClick={onClickHandler}>zuz</button>
      </CardContent>
    </CardWithHover>
  );
};

export default AlertButton;
