import React, { useState } from 'react';
import './App.css';

function App() {
  const [claim, setClaim] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock fact database for demonstration
  const factDatabase = [
    { claim: 'The Earth is round', verdict: 'TRUE', confidence: 'High', explanation: 'Scientific consensus confirms the Earth is an oblate spheroid.' },
    { claim: 'Water boils at 100 degrees Celsius at sea level', verdict: 'TRUE', confidence: 'High', explanation: 'This is a well-established scientific fact.' },
    { claim: 'The moon is made of cheese', verdict: 'FALSE', confidence: 'High', explanation: 'The moon is composed of rock and regolith, not cheese.' },
    { claim: 'Humans use only 10% of their brain', verdict: 'FALSE', confidence: 'High', explanation: 'This is a common myth. Brain imaging shows that most of the brain is active most of the time.' },
    { claim: 'The Great Wall of China is visible from space', verdict: 'MOSTLY FALSE', confidence: 'Medium', explanation: 'It\'s not visible to the naked eye from low Earth orbit without aid.' },
  ];

  const checkFact = (e) => {
    e.preventDefault();
    if (!claim.trim()) {
      return;
    }

    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple matching algorithm
      let bestMatch = null;
      let highestSimilarity = 0;

      factDatabase.forEach(fact => {
        const similarity = calculateSimilarity(claim.toLowerCase(), fact.claim.toLowerCase());
        if (similarity > highestSimilarity) {
          highestSimilarity = similarity;
          bestMatch = fact;
        }
      });

      if (highestSimilarity > 0.3) {
        setResult(bestMatch);
      } else {
        setResult({
          verdict: 'UNVERIFIED',
          confidence: 'Low',
          explanation: 'Could not find sufficient information to verify this claim. Please check reliable sources or rephrase your query.'
        });
      }
      setLoading(false);
    }, 1000);
  };

  // Simple similarity calculation
  const calculateSimilarity = (str1, str2) => {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    let matches = 0;
    
    words1.forEach(word => {
      if (words2.some(w => w.includes(word) || word.includes(w))) {
        matches++;
      }
    });
    
    return matches / Math.max(words1.length, words2.length);
  };

  const getVerdictColor = (verdict) => {
    switch (verdict) {
      case 'TRUE':
        return '#4caf50';
      case 'FALSE':
        return '#f44336';
      case 'MOSTLY FALSE':
        return '#ff9800';
      case 'UNVERIFIED':
        return '#9e9e9e';
      default:
        return '#2196f3';
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🔍 Fact Checker</h1>
          <p className="subtitle">Verify claims with our fact-checking database</p>
        </header>

        <form onSubmit={checkFact} className="search-form">
          <input
            type="text"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder="Enter a claim to fact-check..."
            className="search-input"
            disabled={loading}
          />
          <button type="submit" className="search-button" disabled={loading || !claim.trim()}>
            {loading ? 'Checking...' : 'Check Fact'}
          </button>
        </form>

        {result && (
          <div className="result-card">
            <div className="verdict" style={{ backgroundColor: getVerdictColor(result.verdict) }}>
              {result.verdict}
            </div>
            <div className="confidence">
              Confidence: <strong>{result.confidence}</strong>
            </div>
            <div className="explanation">
              {result.explanation}
            </div>
          </div>
        )}

        <div className="info-section">
          <h2>Try these sample claims:</h2>
          <ul className="sample-claims">
            <li onClick={() => setClaim('The Earth is round')}>The Earth is round</li>
            <li onClick={() => setClaim('Water boils at 100 degrees')}>Water boils at 100 degrees</li>
            <li onClick={() => setClaim('The moon is made of cheese')}>The moon is made of cheese</li>
            <li onClick={() => setClaim('Humans use only 10% of their brain')}>Humans use only 10% of their brain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
