type BadgesProps = {
  text: string;
};

export const Badge = ({ text }: BadgesProps) => {
  return (
    <div className='badge'>
      <p>{text}</p>
    </div>
  );
};
