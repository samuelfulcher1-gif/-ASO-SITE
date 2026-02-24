import Layout from '@/components/Layout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { icons } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Request submitted successfully!');
  };

  return (
    <Layout>
      <section>
        <h1>ASO Pre-Audit Request</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Enter your data" />
          <Button type="submit">Submit</Button>
        </form>
      </section>
      <section>
        <h2>Why ASO</h2>
        <p>Information about why ASO is important.</p>
      </section>
      <section>
        <h2>Analysis</h2>
        <p>Details about the analysis process.</p>
      </section>
      <section>
        <h2>Continuous Operation</h2>
        <p>Explanation of continuous operation.</p>
      </section>
      <section>
        <h2>Market Data</h2>
        <p>Market data and its relevance.</p>
      </section>
      <section>
        <h2>How It Works</h2>
        <p>Description of how the process works.</p>
      </section>
    </Layout>
  );
};

export default Index;