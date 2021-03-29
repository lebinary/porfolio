import * as THREE from 'three'

import Loader from './Utils/Loader.js'
import EventEmitter from './Utils/EventEmitter.js'

// Matcaps
import matcapBeigeSource from '../models/matcaps/beige.png'
import matcapBlackSource from '../models/matcaps/black.png'
import matcapOrangeSource from '../models/matcaps/orange.png'
import matcapRedSource from '../models/matcaps/red.png'
import matcapWhiteSource from '../models/matcaps/white.png'
import matcapGreenSource from '../models/matcaps/green.png'
import matcapBrownSource from '../models/matcaps/brown.png'
import matcapGraySource from '../models/matcaps/gray.png'
import matcapEmeraldGreenSource from '../models/matcaps/emeraldGreen.png'
import matcapPurpleSource from '../models/matcaps/purple.png'
import matcapBlueSource from '../models/matcaps/blue.png'
import matcapYellowSource from '../models/matcaps/yellow.png'
import matcapMetalSource from '../models/matcaps/metal.png'
// import matcapGoldSource from '../models/matcaps/gold.png'

// Intro
import introStaticBaseSource from '../models/intro/static/base.glb'
import introStaticCollisionSource from '../models/intro/static/collision.glb'
import introStaticFloorShadowSource from '../models/intro/static/floorShadow.png'

import introInstructionsLabelsSource from '../models/intro/instructions/labels.glb'
import introInstructionsArrowsSource from '../models/intro/instructions/arrows.png'
import introInstructionsControlsSource from '../models/intro/instructions/controls.png'
import introInstructionsOtherSource from '../models/intro/instructions/other.png'

import introArrowKeyBaseSource from '../models/intro/arrowKey/base.glb'
import introArrowKeyCollisionSource from '../models/intro/arrowKey/collision.glb'

import introBBaseSource from '../models/intro/b/base.glb'
import introBCollisionSource from '../models/intro/b/collision.glb'

import introHBaseSource from '../models/intro/h/base.glb'
import introHCollisionSource from '../models/intro/h/collision.glb'

import introEBaseSource from '../models/intro/e/base.glb'
import introECollisionSource from '../models/intro/e/collision.glb'

import introLBaseSource from '../models/intro/l/base.glb'
import introLCollisionSource from '../models/intro/l/collision.glb'

import introNBaseSource from '../models/intro/n/base.glb'
import introNCollisionSource from '../models/intro/n/collision.glb'

import introIBaseSource from '../models/intro/i/base.glb'
import introICollisionSource from '../models/intro/i/collision.glb'

import introCreativeBaseSource from '../models/intro/creative/base.glb'
import introCreativeCollisionSource from '../models/intro/creative/collision.glb'

import introEngineerBaseSource from '../models/intro/engineer/base.glb'
import introEngineerCollisionSource from '../models/intro/engineer/collision.glb'

// Crossroads
import crossroadsStaticFloorShadowSource from '../models/crossroads/static/floorShadow.png'
import crossroadsStaticBaseSource from '../models/crossroads/static/base1.glb'
import crossroadsStaticCollisionSource from '../models/crossroads/static/collision.glb'

// Car default
import carDefaultChassisSource from '../models/car/default/chassis.glb'
import carDefaultWheelSource from '../models/car/default/wheel.glb'
import carDefaultBackLightsBrakeSource from '../models/car/default/backLightsBrake.glb'
import carDefaultBackLightsReverseSource from '../models/car/default/backLightsReverse.glb'
import carDefaultAntenaSource from '../models/car/default/antena.glb'

// Car cyber truck
import carCyberTruckChassisSource from '../models/car/cyberTruck/chassis.glb'
import carCyberTruckWheelSource from '../models/car/cyberTruck/wheel.glb'
import carCyberTruckBackLightsBrakeSource from '../models/car/cyberTruck/backLightsBrake.glb'
import carCyberTruckBackLightsReverseSource from '../models/car/cyberTruck/backLightsReverse.glb'
import carCyberTruckAntenaSource from '../models/car/cyberTruck/antena.glb'

// Projects
import projectsBoardStructureSource from '../models/projects/board/structure.glb'
import projectsBoardCollisionSource from '../models/projects/board/collision.glb'
import projectsBoardStructureFloorShadowSource from '../models/projects/board/floorShadow.png'
import projectsBoardPlaneSource from '../models/projects/board/plane.glb'

import projectsSocialDevFloorSource from '../models/projects/socialDev/floorTexture.png'
import projectsChartogneFloorSource from '../models/projects/chartogne/floorTexture.png'
import projectsZenlyFloorSource from '../models/projects/zenly/floorTexture.png'
import projectsCitrixRedbullFloorSource from '../models/projects/citrixRedbull/floorTexture.png'
import projectsPriorHoldingsFloorSource from '../models/projects/priorHoldings/floorTexture.png'
import projectsOranoFloorSource from '../models/projects/orano/floorTexture.png'
import projectsGleecChatFloorSource from '../models/projects/gleecChat/floorTexture.png'
import projectsKepplerFloorSource from '../models/projects/keppler/floorTexture.png'

// Information
import informationStaticBaseSource from '../models/information/static/base1.glb'
import informationStaticCollisionSource from '../models/information/static/collision1.glb'
import informationStaticFloorShadowSource from '../models/information/static/floorShadow.png'

import informationLemonBaseSource from '../models/lemon/base.glb'
import informationLemonCollisionSource from '../models/lemon/collision.glb'

import informationContactGithubLabelSource from '../models/information/static/contactGithubLabel.png'
import informationContactLinkedinLabelSource from '../models/information/static/contactLinkedinLabel.png'
import informationContactMailLabelSource from '../models/information/static/contactMailLabel.png'

import informationActivitiesSource from '../models/information/static/activities.png'

// Playground
import playgroundStaticFloorShadowSource from '../models/playground/static/floorShadow.png'
import playgroundStaticBaseSource from '../models/playground/static/base.glb'
import playgroundStaticCollisionSource from '../models/playground/static/collision.glb'

// Brick
import brickBaseSource from '../models/brick/base.glb'
import brickCollisionSource from '../models/brick/collision.glb'

// Horn
import hornBaseSource from '../models/horn/base.glb'
import hornCollisionSource from '../models/horn/collision.glb'

// Lemon
import lemonBaseSource from '../models/lemon/base.glb'
import lemonCollisionSource from '../models/lemon/collision.glb'

// Bowling ball
import bowlingBallBaseSource from '../models/bowlingBall/base.glb'
import bowlingBallCollisionSource from '../models/bowlingBall/collision.glb'

// Bowling pin
import bowlingPinBaseSource from '../models/bowlingPin/base.glb'
import bowlingPinCollisionSource from '../models/bowlingPin/collision.glb'

// Area
import areaKeyEnterSource from '../models/area/keyEnter.png'
import areaEnterSource from '../models/area/enter.png'
import areaOpenSource from '../models/area/open.png'
import areaResetSource from '../models/area/reset.png'
import areaQuestionMarkSource from '../models/area/questionMark.png'

// Tiles
import tilesABaseSource from '../models/tiles/a/base.glb'
import tilesACollisionSource from '../models/tiles/a/collision.glb'

import tilesBBaseSource from '../models/tiles/b/base.glb'
import tilesBCollisionSource from '../models/tiles/b/collision.glb'

import tilesCBaseSource from '../models/tiles/c/base.glb'
import tilesCCollisionSource from '../models/tiles/c/collision.glb'

import tilesDBaseSource from '../models/tiles/d/base.glb'
import tilesDCollisionSource from '../models/tiles/d/collision.glb'

import tilesEBaseSource from '../models/tiles/e/base.glb'
import tilesECollisionSource from '../models/tiles/e/collision.glb'

// Konami
import konamiLabelSource from '../models/konami/label.png'
import konamiLabelTouchSource from '../models/konami/label-touch.png'

// Wigs
import wig1Source from '../models/wigs/wig1.glb'
import wig2Source from '../models/wigs/wig2.glb'
import wig3Source from '../models/wigs/wig3.glb'
import wig4Source from '../models/wigs/wig4.glb'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.loader = new Loader()
        this.items = {}

        this.loader.load([
            // Matcaps
            { name: 'matcapBeige', source: matcapBeigeSource, type: 'texture' },
            { name: 'matcapBlack', source: matcapBlackSource, type: 'texture' },
            { name: 'matcapOrange', source: matcapOrangeSource, type: 'texture' },
            { name: 'matcapRed', source: matcapRedSource, type: 'texture' },
            { name: 'matcapWhite', source: matcapWhiteSource, type: 'texture' },
            { name: 'matcapGreen', source: matcapGreenSource, type: 'texture' },
            { name: 'matcapBrown', source: matcapBrownSource, type: 'texture' },
            { name: 'matcapGray', source: matcapGraySource, type: 'texture' },
            { name: 'matcapEmeraldGreen', source: matcapEmeraldGreenSource, type: 'texture' },
            { name: 'matcapPurple', source: matcapPurpleSource, type: 'texture' },
            { name: 'matcapBlue', source: matcapBlueSource, type: 'texture' },
            { name: 'matcapYellow', source: matcapYellowSource, type: 'texture' },
            { name: 'matcapMetal', source: matcapMetalSource, type: 'texture' },
            // { name: 'matcapGold', source: matcapGoldSource, type: 'texture' },

            // Intro
            { name: 'introStaticBase', source: introStaticBaseSource },
            { name: 'introStaticCollision', source: introStaticCollisionSource },
            { name: 'introStaticFloorShadow', source: introStaticFloorShadowSource, type: 'texture' },

            { name: 'introInstructionsLabels', source: introInstructionsLabelsSource },
            { name: 'introInstructionsArrows', source: introInstructionsArrowsSource, type: 'texture' },
            { name: 'introInstructionsControls', source: introInstructionsControlsSource, type: 'texture' },
            { name: 'introInstructionsOther', source: introInstructionsOtherSource, type: 'texture' },

            { name: 'introArrowKeyBase', source: introArrowKeyBaseSource },
            { name: 'introArrowKeyCollision', source: introArrowKeyCollisionSource },

            { name: 'introBBase', source: introBBaseSource },
            { name: 'introBCollision', source: introBCollisionSource },

            { name: 'introHBase', source: introHBaseSource },
            { name: 'introHCollision', source: introHCollisionSource },

            { name: 'introLBase', source: introLBaseSource },
            { name: 'introLCollision', source: introLCollisionSource },

            { name: 'introEBase', source: introEBaseSource },
            { name: 'introECollision', source: introECollisionSource },

            { name: 'introNBase', source: introNBaseSource },
            { name: 'introNCollision', source: introNCollisionSource },

            { name: 'introIBase', source: introIBaseSource },
            { name: 'introICollision', source: introICollisionSource },

            { name: 'introCreativeBase', source: introCreativeBaseSource },
            { name: 'introCreativeCollision', source: introCreativeCollisionSource },

            { name: 'introEngineerBase', source: introEngineerBaseSource },
            { name: 'introEngineerCollision', source: introEngineerCollisionSource },

            // Intro
            { name: 'crossroadsStaticBase', source: crossroadsStaticBaseSource },
            { name: 'crossroadsStaticCollision', source: crossroadsStaticCollisionSource },
            { name: 'crossroadsStaticFloorShadow', source: crossroadsStaticFloorShadowSource, type: 'texture' },

            // Car default
            { name: 'carDefaultChassis', source: carDefaultChassisSource },
            { name: 'carDefaultWheel', source: carDefaultWheelSource },
            { name: 'carDefaultBackLightsBrake', source: carDefaultBackLightsBrakeSource },
            { name: 'carDefaultBackLightsReverse', source: carDefaultBackLightsReverseSource },
            { name: 'carDefaultAntena', source: carDefaultAntenaSource },

            // Car default
            { name: 'carCyberTruckChassis', source: carCyberTruckChassisSource },
            { name: 'carCyberTruckWheel', source: carCyberTruckWheelSource },
            { name: 'carCyberTruckBackLightsBrake', source: carCyberTruckBackLightsBrakeSource },
            { name: 'carCyberTruckBackLightsReverse', source: carCyberTruckBackLightsReverseSource },
            { name: 'carCyberTruckAntena', source: carCyberTruckAntenaSource },

            // Project
            { name: 'projectsBoardStructure', source: projectsBoardStructureSource },
            { name: 'projectsBoardCollision', source: projectsBoardCollisionSource },
            { name: 'projectsBoardStructureFloorShadow', source: projectsBoardStructureFloorShadowSource, type: 'texture' },
            { name: 'projectsBoardPlane', source: projectsBoardPlaneSource },

            { name: 'projectsSocialDevFloor', source: projectsSocialDevFloorSource, type: 'texture' },
            { name: 'projectsChartogneFloor', source: projectsChartogneFloorSource, type: 'texture' },
            { name: 'projectsZenlyFloor', source: projectsZenlyFloorSource, type: 'texture' },
            { name: 'projectsCitrixRedbullFloor', source: projectsCitrixRedbullFloorSource, type: 'texture' },
            { name: 'projectsPriorHoldingsFloor', source: projectsPriorHoldingsFloorSource, type: 'texture' },
            { name: 'projectsOranoFloor', source: projectsOranoFloorSource, type: 'texture' },
            { name: 'projectsGleecChatFloor', source: projectsGleecChatFloorSource, type: 'texture' },
            { name: 'projectsKepplerFloor', source: projectsKepplerFloorSource, type: 'texture' },

            // Information
            { name: 'informationStaticBase', source: informationStaticBaseSource },
            { name: 'informationStaticCollision', source: informationStaticCollisionSource },
            { name: 'informationStaticFloorShadow', source: informationStaticFloorShadowSource, type: 'texture' },

            { name: 'informationLemonBase', source: informationLemonBaseSource },
            { name: 'informationLemonCollision', source: informationLemonCollisionSource },

            { name: 'informationContactGithubLabel', source: informationContactGithubLabelSource, type: 'texture' },
            { name: 'informationContactLinkedinLabel', source: informationContactLinkedinLabelSource, type: 'texture' },
            { name: 'informationContactMailLabel', source: informationContactMailLabelSource, type: 'texture' },

            { name: 'informationActivities', source: informationActivitiesSource, type: 'texture' },

            // Playground
            { name: 'playgroundStaticBase', source: playgroundStaticBaseSource },
            { name: 'playgroundStaticCollision', source: playgroundStaticCollisionSource },
            { name: 'playgroundStaticFloorShadow', source: playgroundStaticFloorShadowSource, type: 'texture' },

            // Brick
            { name: 'brickBase', source: brickBaseSource },
            { name: 'brickCollision', source: brickCollisionSource },

            // Horn
            { name: 'hornBase', source: hornBaseSource },
            { name: 'hornCollision', source: hornCollisionSource },

            // // Cone
            // { name: 'coneBase', source: coneBaseSource },
            // { name: 'coneCollision', source: coneCollisionSource },

            // Lemon
            { name: 'lemonBase', source: lemonBaseSource },
            { name: 'lemonCollision', source: lemonCollisionSource },

            // Bownling ball
            { name: 'bowlingBallBase', source: bowlingBallBaseSource },
            { name: 'bowlingBallCollision', source: bowlingBallCollisionSource },

            // Bownling ball
            { name: 'bowlingPinBase', source: bowlingPinBaseSource },
            { name: 'bowlingPinCollision', source: bowlingPinCollisionSource },

            // Areas
            { name: 'areaKeyEnter', source: areaKeyEnterSource, type: 'texture' },
            { name: 'areaEnter', source: areaEnterSource, type: 'texture' },
            { name: 'areaOpen', source: areaOpenSource, type: 'texture' },
            { name: 'areaReset', source: areaResetSource, type: 'texture' },
            { name: 'areaQuestionMark', source: areaQuestionMarkSource, type: 'texture' },

            // Tiles
            { name: 'tilesABase', source: tilesABaseSource },
            { name: 'tilesACollision', source: tilesACollisionSource },

            { name: 'tilesBBase', source: tilesBBaseSource },
            { name: 'tilesBCollision', source: tilesBCollisionSource },

            { name: 'tilesCBase', source: tilesCBaseSource },
            { name: 'tilesCCollision', source: tilesCCollisionSource },

            { name: 'tilesDBase', source: tilesDBaseSource },
            { name: 'tilesDCollision', source: tilesDCollisionSource },

            { name: 'tilesEBase', source: tilesEBaseSource },
            { name: 'tilesECollision', source: tilesECollisionSource },

            // Konami
            { name: 'konamiLabel', source: konamiLabelSource, type: 'texture' },
            { name: 'konamiLabelTouch', source: konamiLabelTouchSource, type: 'texture' },

            // Wigs
            { name: 'wig1', source: wig1Source },
            { name: 'wig2', source: wig2Source },
            { name: 'wig3', source: wig3Source },
            { name: 'wig4', source: wig4Source }
        ])

        this.loader.on('fileEnd', (_resource, _data) =>
        {
            this.items[_resource.name] = _data

            // Texture
            if(_resource.type === 'texture')
            {
                const texture = new THREE.Texture(_data)
                texture.needsUpdate = true

                this.items[`${_resource.name}Texture`] = texture
            }

            // Trigger progress
            this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
        })

        this.loader.on('end', () =>
        {
            // Trigger ready
            this.trigger('ready')
        })
    }
}
