const getEmail = () => {
  const parts = ['mrperfect6ft', 'gmail', 'com'];
  return `${parts[0]}@${parts[1]}.${parts[2]}`;
};

const InvestorContact = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-8">
      <div className="text-center">
        <a
          href={`mailto:${getEmail()}`}
          className="text-[26px] font-medium text-white link-minimal tracking-wide"
        >
          {getEmail()}
        </a>
      </div>
    </main>
  );
};

export default InvestorContact;