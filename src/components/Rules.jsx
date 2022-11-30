const Rules = () => {
  return (
    <div className="max-w-[1200px]  mx-auto text-white text-center p-4">
      <h1 className="text-3xl uppercase font-bold my-4">Rules</h1>
      <h2 className="my-4 text-3xl uppercase treasure-hunt-heading rules">
        TreasureHunt Game
      </h2>
      <p className="my-2">
        Work with your wolfpack friends to help battle and defeat Little Red
        Riding Hood.
      </p>
      <h3 className="my-2 text-2xl">How to Play</h3>
      <p className="my-2">
        The Dragon’s Hoard Game has a 90 second countdown timer which resets on
        each bid. Use your $WOLFIES to place a bid which goes into the Wolfies
        Reward balance, allowing you to become the most recent wolfie to deal
        damage to “Little Red”. When the timer reaches zero, the last wolfie to
        deal damage will land the killing blow, and win the game, along with the
        Wolfies Reward that comes with it! Before another game can start, one of
        the wolfpack members has to press the restart game button.
      </p>
      <h3 className="my-4 text-2xl">Winning’s distribution?</h3>
      <p className="my-2">
        This resets the contract and refreshes the cooldown timer before a new
        game begins.
      </p>
      <h3 className="my-4 text-2xl">Wolfies Rewards distribution?</h3>
      <p className="w-[70%] mx-auto">
        When the countdown timer ends, the Wolfies Reward balance will be
        distributed as follows: 60% credited instantly to winner’s address to
        celebrate their contribution to victory 30% carries over to the next
        round. 10% goes to be burned as a sacrfice.
      </p>
      <p>
        Note: Anyone can click on the claim button but the winning share will go
        to the last bidder.
      </p>
      <p className="text-rose-800 my-4">
        Important Note: All bids are final. Your $WOLFIES cannot be returned
        after bidding
      </p>
    </div>
  );
};

export default Rules;
