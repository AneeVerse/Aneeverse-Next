import Image from 'next/image';

const BlogDetails = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="rounded-xl overflow-hidden">
        <Image 
          src="/images/blog/thumbnail.avif" 
          alt="Blog Cover" 
          width={1200} 
          height={600} 
          className="w-full h-auto"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold text-gray-900">Creative Leadership Decoded: Lessons from Two Industry Experts</h1>
        <p className="text-gray-500 mt-1">Published Jan 6</p>
        <div className="flex items-center mt-3">
          <Image 
            src="/images/blog/author.avif" 
            alt="Author" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900">Not Completed</p>
            <p className="text-xs text-gray-500">Senior Content Marketing Specialist</p>
          </div>
        </div>
      </div>
      <div className="mt-5 text-gray-800">
        <p className="text-gray-600 text-sm flex items-center"><span className="mr-2">⏳</span> 5 min read</p>
        <div className="mt-3 bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">TL;DR</h3>
          <p className="text-gray-700 mt-2">Leading means thinking outside the box. Superside’s Kae Neskovic and Reddit’s Marie Kare reveal the secrets to thriving as a creative leader...</p>
        </div>
        <div className="mt-5 text-gray-700 space-y-4">
          <p>Staying creative as a leader is no small feat. In fact, it’s the lament of many creatives who have been promoted into leadership positions...</p>
          <p>Creative leaders often face unique challenges, such as maintaining their own creative spark while inspiring and guiding their teams...</p>
          <p>Superside’s Executive Creative Director, Kae Neskovic spoke with Marie Kare, Head of Creative for Global Business Brand at Reddit...</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
