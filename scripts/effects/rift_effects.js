import Effect from './effect.js';
//import EffectDefinitions from './effect-definitions';
import Constants from '../constants.js';
import Settings from '../settings.js';


export default class RiftEffectDefinitions {
    get rift_conditions() {
        return [
            this._embarrassed,
            this._prone_till_next_turn,
            this._DISLOCATION,
            this._ITEM_BROKE,
            this._OVEREXTENDED,
            this._fatigued,
            this._PULLED_MUSCLE,
            this._ANKLE_TWIST,
            this._KNEE_POP,
            this._WRONG_STRAP,
            this._STAGGERING_IN_PAIN,
            this._BLINDED_BY_YOUR_OWN_BLOOD,

            //
            this._Drop_0_Bleeding_out,
            this._Drop_0_stable,
            this._Stunned_one_turn,
            this._Major_system_shock,
            this._System_shock,

            //
            this._KNOCKDOWN,
            this._HAMSTRING,
            this._TURN_THE_TIDE,
            this._EYE_GOUGE,
            this._FORCEFUL_BLOW,
            this._STUNNING_BLOW,
            this._PARRY,
            this._GAPING_WOUND,
            this._PRESSURE_POINT,
            this._OPPORTUNITY,
            this._KNOCKOUT_BLOW,
            this._EVISCERATE,
            this._DECAPITATION,
            this._APPENDAGE_BLOW,
            this._WRIST_BLOW,
            this._MIGHTY_BLOW,
            this._HEAD_BLOW,
            this._KNEE_HIT,
            this._BODY_BLOW,
            this._SHOULDER_BLOW,

        ]
    }




    // DONE =============


    /* Rifts critical effects */
    //   KNOCKDOWN

    //   HAMSTRING
    get _HAMSTRING(){
      return new Effect({
        name: 'HAMSTRING',
        description:
          'In addition to standard critical hit damage, you hamstring the target. The target is slowed for 1 hour.',
        icon: 'modules/dfreds-convenient-effects/images/grappled.svg',
        seconds: 3600,
        changes: [
          {
            key: 'data.attributes.movement.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '*0.5',
            priority: 5,
          },
        ],
      });
    }


    //   TURN THE TIDE
    get _TURN_THE_TIDE(){
      return new Effect({
        name: 'TURN THE TIDE',
        description:
          'In addition to standard critical hit damage to your target, you gain combat advantage against all enemies on the battlefield until the end of your next turn.',
        icon: 'modules/dfreds-convenient-effects/images/magic-palm.svg',
        turns: 1,
        changes: [
          {
            key: 'flags.midi-qol.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }


    //   EYE GOUGE
  get _EYE_GOUGE(){
    return new Effect({
      name: 'EYE GOUGE',
      description:
        'In addition to standard critical hit damage, your target is blinded until the end of its next turn.',
        icon: 'modules/dfreds-convenient-effects/images/blinded.svg',
        turns: 1,
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
    });
  }

  //   FORCEFUL BLOW
  get _FORCEFUL_BLOW(){
    return new Effect({
      name: 'FORCEFUL BLOW',
      description:
        'In addition to standard critical hit damage, your target is dazed until the end of its next turn. (Cannot cast spells, disadvantage attacks and ability checks).',
      icon: 'modules/dfreds-convenient-effects/images/frightened.svg',
      turns: 1,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }


  //   STUNNING BLOW
  get _STUNNING_BLOW(){
    return new Effect({
      name: 'STUNNING BLOW',
      description:
        'In addition to standard critical hit damage, your target is stunned until the end of its next turn.',
      icon: 'modules/dfreds-convenient-effects/images/stunned.svg',
      turns: 1,
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }


  //   PARRY
  get _PARRY(){
    return new Effect({
      name: 'PARRY',
      description:
        'In addition to standard critical hit damage to your target, you gain +2 to all your defenses against attacks until the end of your next turn.',
      icon: 'modules/dfreds-convenient-effects/images/brick-wall.svg',
      changes: [
        {
          key: 'data.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
      ],
    });
  }


  //   GAPING WOUND
  get _GAPING_WOUND(){
    return new Effect({
      name: 'GAPING WOUND',
      description:
        'In addition to standard critical hit damage, the target takes ongoing 5 +1/2 your level damage (round up).',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.OverTime.regenerate',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value:
            'label=Bleeding,turn=start,damageRoll=-1d6,damageType=bleeding,condition=@attributes.hp.value > 0',
        },
      ],
    });
  }


  //   PRESSURE POINT
  get _PRESSURE_POINT(){
    var reduction = '-1d6'

    return new Effect({
      name: 'PRESSURE POINT',
      description:
        'In addition to standard critical hit damage, the target is Weakened (save ends).',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      
      changes: [
        {
          key: 'data.bonuses.mwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: reduction,
        },
        {
          key: 'data.bonuses.rwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: reduction,
        },
        {
          key: 'data.bonuses.rsak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: reduction,
        },        
        {
          key: 'data.bonuses.msak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: reduction,
        },
      ],
    });
  }


  //   KNOCKOUT BLOW
  get _KNOCKOUT_BLOW(){
    return new Effect({
      name: 'KNOCKOUT BLOW',
      description:
        'In addition to standard critical hit damage, you knock the target Unconcious (save or target taking damage ends).',
      icon: 'icons/svg/unconscious.svg',
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.critical.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.critical.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
      ],
    });
  }
  
  //   DECAPITATION
  get _DECAPITATION(){
    return new Effect({
      name: 'DECAPITATION',
      description:
        'Your targets head is decapitated (slashing weapon), crushed (blunt weapon) or pierced (piercing weapon) or (if weapon was a spell) some effect to the head related to the type of attack that will likely leave target dead. If this action is not possible due to nature of the target, you do standard critical damage and gain an action point, instead.',
      icon: 'icons/svg/skull.svg',
    });
  }


  
  
  //   APPENDAGE BLOW
  get _APPENDAGE_BLOW(){
    return new Effect({
      name: 'APPENDAGE BLOW',
      description:
        'In addition to standard critical damage, your target loses a finger (slashing weapon), breaks fingers (blunt weapon) or has arm muscle punctured (piercing weapon) or (if weapon was a spell) some effect to the fingers or arm related to the type of attack. 50% chance of either main or offhand. This hand or arm will suffer a -2 penalty on all checks for 4 weeks or until appropriate healing spell cast upon target. If this action is not possible due to the nature of the target, then in addition to standard critical damage, you gain an action point instead.',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'data.bonuses.abilities.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d2',
        },
        {
          key: 'data.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d2',
        },
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d2',
        },
        {
          key: 'data.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d2',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d2',
        },
      ],
    });
  }
  
  //   WRIST BLOW
  get _WRIST_BLOW(){
    return new Effect({
      name: 'WRIST BLOW',
      description:
        'The targets hand is removed at the wrist (slashing weapon) or wrist broken (blunt weapon) or wrist pierced (piercing weapon) or (if weapon was a spell) some effect to wrist related to the type of damage. 50% chance of either main or offhand. Wrist is incapacitated in any case. If this action is not possible due to the nature of the target, then in addition to standard critical damage, you gain an action point instead.',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'data.bonuses.abilities.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
      ],
    });
  }

  
  
  //   HEAD BLOW
  get _HEAD_BLOW(){
    return new Effect({
      name: 'HEAD BLOW',
      description:
        'In addition to standard critical hit, the target loses an ear (slashing weapon) or an eye (piercing weapon), or blow to the skull (blunt weapon) or (if weapon was a spell) some effect related to the type of attack. 50% of left or right side. Loss of ear or eye both result in permanently granting combat advantage to opponents approaching from that side. Blow to the head permanently reduces int save and checks by 4. If this action is impossible due to the nature of the target, then you do standard critical hit damage and gain an action point, instead.',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'data.abilities.int.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+4',
        },
        {
          key: 'data.abilities.int.bonuses.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+4',
        },
      ],
    });
  }

  
  
  
  //   KNEE HIT
  get _KNEE_HIT(){
    return new Effect({
      name: 'KNEE HIT',
      description:
        'In addition to standard critical damage, your targets leg is cut off at the knee (slashing weapon) and falls prone or knee is broken (blunt weapon) and movement reduced to 1/4 speed and target will have permanent limp (-2 speed) as after effect or knee is split (piercing weapon) and target falls and movement reduced to 1/2 speed or (if weapon is spell) some effect to the knee related to the type of attack. If this action is impossible due to the nature of the target, then you do standard critical damage and gain an action point, instead.',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
      ],
    });
  }

  
  //   BODY BLOW
  get _BODY_BLOW(){
    return new Effect({
      name: 'BODY BLOW',
      description:
        'In addition to standard critical damage, your targets lung is slashed (slashing weapon) or pierced (piercing weapon) or ribs are broken (blunt weapon). All of these result in being stunned for 2 rounds and a -1 penalty to combat until healed with appropriate healing spell. 50% chance of right or left side. If this action is impossible due to the nature of the target, then you do standard critical damage and gain an action point, instead.',
      icon: 'modules/dfreds-convenient-effects/images/stunned.svg',
      turns: 2,
      changes: [
          {
            key: 'flags.midi-qol.fail.ability.save.dex',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.fail.ability.save.str',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'data.bonuses.msak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 1,
          },
          {
            key: 'data.bonuses.mwak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 1,
          },
          {
            key: 'data.bonuses.rsak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 1,
          },
          {
            key: 'data.bonuses.rwak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 1,
          },
        ],
    });
  }

  
  //   SHOULDER BLOW
  get _SHOULDER_BLOW(){
    return new Effect({
      name: 'SHOULDER BLOW',
      description:
        'In addition to standard critical damage, your targets arm is cut off at the shoulder (slashing weapon) and target is stunned for 2 rounds or shoulder is broken (blunt weapon) and target is stunned for 2 rounds or shoulder is torn (piercing weapon) and target is stunned for 2 rounds or (if weapon was a spell) some effect to shoulder related to the type of attack. 50% chance of main or off hand. Broken or torn shoulders will result in a permanent -2 to all checks until healed with appropriate healing spell. If this action is impossible due to the nature of the target, you do standard critical hit damage and gain an action point, instead.',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      turns: 2,
      changes: [
          {
            key: 'flags.midi-qol.fail.ability.save.dex',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.fail.ability.save.str',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'data.bonuses.msak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 2,
          },
          {
            key: 'data.bonuses.mwak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 2,
          },
          {
            key: 'data.bonuses.rsak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 2,
          },
          {
            key: 'data.bonuses.rwak.attack',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 2,
          },
        ],
    });
  }



  
  

  /* Rifts Massive damage */
  //   // --------------
  //   Drop 0 Bleeding out
  get _Drop_0_Bleeding_out(){
    return new Effect({
      name: 'Drop 0 Bleeding out',
      description:
        'The creature drops to 0 hit points.',
        icon: 'icons/svg/unconscious.svg',
        changes: [
          {
            key: 'flags.midi-qol.fail.ability.save.dex',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.fail.ability.save.str',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.critical.mwak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.critical.msak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'data.attributes.movement.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '0',
            priority: 5,
          },
      ],
    });
  }
  
  //   Drop 0 stable
  get _Drop_0_stable(){
    return new Effect({
      name: 'Drop 0 stable',
      description:
        'The creature drops to 0 hit points but is stable.',
        icon: 'icons/svg/unconscious.svg',
        changes: [
          {
            key: 'flags.midi-qol.fail.ability.save.dex',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.fail.ability.save.str',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.critical.mwak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.critical.msak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'data.attributes.movement.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '0',
            priority: 5,
          },
      ],
    });
  }
  
  //   Stunned one turn
  get _Stunned_one_turn(){
    return new Effect({
      name: 'Stunned one turn',
      description:
        'The creature is stunned until the end of its next turn.',
      icon: 'modules/dfreds-convenient-effects/images/broken-wall.svg',
      turns: 1,
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   Major system shock 
  get _Major_system_shock (){
    return new Effect({
      name: 'Major system shock',
      description:
        'The creature can’t take reactions and has disadvantage on attack rolls and ability checks until the end of its next turn.',
      icon: 'modules/dfreds-convenient-effects/images/broken-wall.svg',
      turns: 1,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  
//   System shock 
get _System_shock(){
    return new Effect({
      name: 'System shock',
      description:
        'The creature can’t take reactions until the end of its next turn.',
      icon: 'modules/dfreds-convenient-effects/images/broken-wall.svg',
      turns: 1,
    });
  }
  
  

    // NOT DONE =============


  

  
  
  

  
    /* Rifts Effects */
    get _prone_till_next_turn(){
      return new Effect({
        name: 'prone_till_next_turn',
        description:
          'You fall Prone.',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        seconds: 20,
        turns: '1d4',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }

    get _PULLED_MUSCLE(){
      return new Effect({
        name: 'PULLED MUSCLE',
        description:
          'You are weakened until end of your next turn.',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        seconds: 20,
        turns: '1d4',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }

    get _embarrassed(){
      return new Effect({
        name: 'Embarrassed',
        description:
          'You recieve a -2 penalty to attack rolls for 1d4 turns',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        seconds: 20,
        turns: '1d4',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }

    
  
    get _OVEREXTENDED(){
      return new Effect({
        name: 'Stunned one turn',
        description:
          'The creature is stunned until the end of its next turn.',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        seconds: 20,
        turns: '1d4',
        changes: [
          {
            key: 'flags.midi-qol.fail.ability.save.dex',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.fail.ability.save.str',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
          {
            key: 'flags.midi-qol.grants.advantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
    
  
    get _fatigued(){
      return new Effect({
        name: 'Fatigued',
        description:
          'You are dazed until end of your next turn',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }


    get _DISLOCATION(){
      return new Effect({
        name: 'DISLOCATION',
        description:
          'A forceful pop in your shoulder is is heard as your arm goes limp. The arm you used to make the attack is incapacitated for 1d4 + 6 rounds',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
    
  
  
    get _ANKLE_TWIST(){
      return new Effect({
        name: 'ANKLE TWIST',
        description:
          'You twist your ankle and have 1/2 movement speed and cannot charge for 1d4+1 rounds',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _KNEE_POP(){
      return new Effect({
        name: 'KNEE POP',
        description:
          'Your knee hyperextends awkwardly. You have 1/4 movement speed and cannot charge for 1d4 + 6 rounds',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _WRONG_STRAP(){
      return new Effect({
        name: 'WRONG STRAP',
        description:
          'In an embarrasing move, you cut loose part of your armor and receive a -4 penalty until armor is fixed. Fixing the armor will require 3 rounds of performing no other action',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _STAGGERING_IN_PAIN(){
      return new Effect({
        name: 'STAGGERING IN PAIN',
        description:
          'Your opponent parries your awkward attack that causes you to hit yourself in the groin. You have 1/2 movement and -4 to all actions for 1d6 + 4 rounds. If this action is impossible, your original target receives an action point',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _BLINDED_BY_YOUR_OWN_BLOOD(){
      return new Effect({
        name: 'BLINDED BY YOUR OWN BLOOD',
        description:
          'You hit yourself in the head causing a minor flesh wound (4 damage) and you are blinded by blood flowing into your eyes for 1d4 rounds.',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
}