const patent = {
  title: "Software System That Integrates AI-Powered Sensitive Content Detection Into a Web-Based Prototype",
  credentialNo: "202541006556",
  status: "Published",
  fillingDate: "Jan 2025",
  issuedDate: "Feb 2025",
  url: "https://iprsearch.ipindia.gov.in/",
  description: [
    "Built a CNN model using Keras to detect sensitive/inappropriate image content like nudity, violence, etc.",
    "Created and labeled a custom dataset for training and testing various types of sensitive content.",
    "Applied data augmentation, dropout, and other regularization techniques to prevent overfitting.",
    "Evaluated model performance using metrics like precision, recall, F1-score, and confusion matrix.",
    "Exported the final trained model in ‘.keras‘ format for deployment and integration."
  ]
};

const Patents = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Patents</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
    </div>
    <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="w-full md:flex-1 mb-6 md:mb-0">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2 text-center md:text-left">{patent.title}</h3>
        <a href={patent.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm block text-center md:text-left">{patent.url}</a>
        <div className="mt-2 text-gray-300 text-sm text-center md:text-left">Credential No: {patent.credentialNo} | Status: {patent.status}</div>
        <div className="mt-1 text-gray-400 text-xs text-center md:text-left">Filling Date: {patent.fillingDate} | Issued Date: {patent.issuedDate}</div>
      </div>
      <div className="w-full md:flex-1">
        <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
          {patent.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Patents;
