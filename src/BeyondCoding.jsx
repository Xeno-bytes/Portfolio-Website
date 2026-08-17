import { Coffee } from 'lucide-react'
function BeyondCoding() {
    return (
        <div>
           <div className="flex items-center gap-3 pb-5">
                <div className="flex items-center justify-center p-2.5 rounded-xl bg-surface-a20 border border-surface-a30 text-text-primary shadow-sm">
                    <Coffee className="w-5 h-5" />
                </div>
                <h1 className="text-2xl font-bold text-text-primary">
                    Beyond Coding
                </h1>
            </div>
           
            <div className='ml-2'>
                <p>
                    When I am not at my desk coding, I love to immerse myself in a video game. I have a deep love for games that challenges my brain to solve problems that the game provides while experiencing their story.
                </p> <br />
            
                <p>
                    Solving the puzzles of a dungeon or optimizing a team composition to beat an enemy is just another form of debugging to me!
                </p>
            </div>
            
        </div>
    )
}

export default BeyondCoding;